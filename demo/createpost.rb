# encoding: utf-8
require 'fileutils'

# for colored output
class String
def red;            "\033[31m#{self}\033[0m" end
def green;          "\033[32m#{self}\033[0m" end
def brown;          "\033[33m#{self}\033[0m" end
def gray;           "\033[37m#{self}\033[0m" end
def bold;           "\033[1m#{self}\033[22m" end
end

# methods
#---------

# create File name for URL
def createURL(string)
    string.downcase!
    string.gsub! " ", "-"
    string.encode!("UTF-8")
    string.gsub! "ä", "ae"
    string.gsub! "ö", "oe"
    string.gsub! "ü", "ue"
end

# replace all ä,ö,ü with Unicode
def umlautify(string)
    string.encode!("UTF-8")
    string.gsub! "ä", "&auml;"
    string.gsub! "Ä", "&Auml;"
    string.gsub! "ö", "&ouml;"
    string.gsub! "Ö", "&Ouml;"
    string.gsub! "ü", "&uuml;"
    string.gsub! "Ü", "&Uuml;"
end

# replace every colon within yml, so that it still can get parsed correctly
def sanitizeYML(string)
    string.gsub! ":", "&colon;"
end

# date
#------
time = Time.new
year = time.year.to_s

#if day and month are below 10, add a 0 in front of it
if time.day <= 9
    day = "0#{time.day}"
else
    day = time.day.to_s
end

if time.month <= 9
    month = "0#{time.month}"
else
    month = time.month.to_s
end

# Generator
#-----------

# starting msg
puts "Initating Front Matter Generator for Posts.\nPlease enter the following information as per instruction.\n".bold.green
puts ""

# Title
puts "Enter post title. It should not be longer than 55 characters".bold.gray
title = gets.chomp

if title.length > 55
    puts "Your title is too long, please enter a shorter title".bold.brown
    title = gets.chomp
    if title == ''
        abort("Program was aborted, because no valid title was entered. Please restart".bold.red)
    elsif title.length > 55
        abort('Program was aborted, because title was too long. Please restart'.bold.red)
    end
elsif title == ''
    puts "Please enter a title, shorter than 55 characters".bold.gray
    title = gets.chomp
    if title == ''
        abort("Program was aborted, because no valid title was entered. Please restart".bold.red)
    elsif title.length > 55
        abort('Program was aborted, because title was too long. Please restart'.bold.red)
    end
end

# URL Title
puts ""
puts "Is the title going to be equal to the URL Title?\n(yes/no)".bold.gray
url_title_yes_or_no = gets.chomp

case url_title_yes_or_no
when "yes", "y"
    file_name = title
when "no", "n"
    puts "Enter the URL title".bold.gray
    file_name = gets.chomp
    if file_name == ''
        puts "Please enter a valid file name".bold.brown
        file_name = gets.chomp
        if file_name == ''
            abort("Program was aborted. Please restart and follow instructions".bold.red)
        end
    end
else
    puts "Please enter either 'yes' or 'no'".bold.brown
    url_title_yes_or_no = gets.chomp
    case url_title_yes_or_no
    when "yes", "y"
        file_name = title
    when "no", "n"
        puts "Enter the URL title".bold.gray
        file_name = gets.chomp
        if file_name == ''
            puts "Please enter a valid file name".bold.brown
            file_name = gets.chomp
            if file_name == ''
                abort("Program was aborted. Please restart and follow instructions".bold.red)
            end
        end
    else
        abort("Program was aborted. Please restart and follow instructions".bold.red)
    end
end

# create URL
createURL(file_name)

# if there is a folder specified, add it and create a new folder, if it does not already exist
folder = "_posts/"

file_format = "markdown"
case file_format
when "md", "markdown"
    file_ending = ".md"
when "html", "HTML"
    file_ending = ".html"
when "txt", "textile"
    file_ending = ".txt"
else
    file_ending = ""
end

# set path for file
if folder != nil
    path = "#{folder}/#{year}-#{month}-#{day}-#{file_name}#{file_ending}"

    dirname = File.dirname(path)
    unless File.directory?(dirname)
        FileUtils.mkdir_p(dirname)
    end
else
    path = "#{year}-#{month}-#{day}-#{file_name}#{file_ending}"
end

#subtitle
puts ""
puts "Enter subtitle\n(press enter if you don't want to add a subtitle)".bold.gray
subtitle = gets.chomp

#tags
puts ""
puts "Enter tags, separate with commas\n(press enter if you don't want to add tags)".bold.gray
tags = gets.chomp

# Description
puts ""
puts "Enter post description. It shouldn't be longer than 115 characters".bold.gray
desc = gets.chomp

if desc.length > 115
    puts "Your description is too long, please enter a shorter description".bold.brown
    desc = gets.chomp
    if desc == ''
        abort("Program was aborted, because no valid description was entered. Please restart".bold.red)
    elsif desc.length > 115
        abort('Program was aborted, because description was too long. Please restart'.bold.red)
    end
elsif desc == ''
    puts "Please enter a description, shorter than 55 characters".bold.gray
    desc = gets.chomp
    if desc == ''
        abort("Program was aborted, because no valid desription was entered. Please restart".bold.red)
    elsif desc.length > 115
        abort('Program was aborted, because description was too long. Please restart'.bold.red)
    end
end

# create new file
p = File.open( path,"w" )

sanitizeYML(title)
sanitizeYML(subtitle)
sanitizeYML(desc)

umlautify(title)
umlautify(subtitle)
umlautify(tags)
umlautify(desc)

# file content
p.puts "---"
p.puts "date: #{time}"
p.puts "title: #{title}"
if subtitle != ""
    p.puts "subtitle: #{subtitle}"
end
if tags != ""
    p.puts "tags: [#{tags}]"
end
p.puts "description: #{desc}"
p.puts "---"
p.close

# add notification that file was created
puts "file '#{path}' created".bold.green
puts ""
puts "opening file in brackets".bold.green

# add command to open file in brackets
value = `brackets #{path}`
