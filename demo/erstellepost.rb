# encoding: utf-8
require 'fileutils'

# für farbigen Output
class String
def red;            "\033[31m#{self}\033[0m" end
def green;          "\033[32m#{self}\033[0m" end
def brown;          "\033[33m#{self}\033[0m" end
def gray;           "\033[37m#{self}\033[0m" end
def bold;           "\033[1m#{self}\033[22m" end
end

# Erstelle URL Format aus String
def createURL(string)
    string.downcase!
    string.gsub! " ", "-"
    string.encode!("UTF-8")
    string.gsub! "ä", "ae"
    string.gsub! "ö", "oe"
    string.gsub! "ü", "ue"
end

# Ersetze alle Umlaute mit Unicode
def umlautify(string)
    string.encode!("UTF-8")
    string.gsub! "ä", "&auml;"
    string.gsub! "Ä", "&Auml;"
    string.gsub! "ö", "&ouml;"
    string.gsub! "Ö", "&Ouml;"
    string.gsub! "ü", "&uuml;"
    string.gsub! "Ü", "&Uuml;"
end

# Ersetze jeden Doppelpunkt mit Unicode
def sanitizeYML(string)
    string.gsub! ":", "&colon;"
end

# Datum
#------
time = Time.new
year = time.year.to_s

# Wenn Tag und Monat unter 10 sind, füge 0 vorne hinzu
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

# Start Nachricht
puts "Initiiere Front Matter Generator für Posts.\nGib folgende Informationen wie instruiert ein.\n".bold.green
puts ""

# Title
puts "Post Titel. Sollte nicht länger als 55 Zeichen sein".bold.gray
title = gets.chomp

if title.length > 55
    puts "Dein Titel ist zu lang, gib einen kürzeren ein".bold.brown
    title = gets.chomp
    if title == ''
        abort("Programm abgebrochen, weil kein gültiger Titel eingegeben wurde. Bitte starte erneut".bold.red)
    elsif title.length > 55
        abort('Programm abgebrochen, weil der Titel zu lang war. Bitte starte erneut'.bold.red)
    end
elsif title == ''
    puts "Bitte gib einen Titel ein, der weniger als 55 Zeichen lang ist".bold.gray
    title = gets.chomp
    if title == ''
        abort("Programm abgebrochen, weil kein gültiger Titel eingegeben wurde. Bitte starte erneut".bold.red)
    elsif title.length > 55
        abort('Programm abgebrochen, weil der Titel zu lang war. Bitte starte erneut'.bold.red)
    end
end

# URL Title
puts ""
puts "Ist der Titel gleich wie die URL?\n(ja/nein)".bold.gray
url_title_yes_or_no = gets.chomp

case url_title_yes_or_no
when "ja", "j"
    file_name = title
when "nein", "n"
    puts "Gib die URL ein".bold.gray
    file_name = gets.chomp
    if file_name == ''
        puts "Bitte gib einen gültigen Dateinamen ein".bold.brown
        file_name = gets.chomp
        if file_name == ''
            abort("Programm abgebrochen. Bitte starte erneut und befolge die Anweisungen".bold.red)
        end
    end
else
    puts "Bitte gib entweder 'ja' oder 'nein' ein.".bold.brown
    url_title_yes_or_no = gets.chomp
    case url_title_yes_or_no
    when "ja", "j"
        file_name = title
    when "nein", "n"
        puts "Gib die URL ein".bold.gray
        file_name = gets.chomp
        if file_name == ''
            puts "Bitte gib einen gültigen Dateinamen ein".bold.brown
            file_name = gets.chomp
            if file_name == ''
                abort("programm abgebrochen. Bitte starte erneut und befolge die Anweisungen".bold.red)
            end
        end
    else
        abort("programm abgebrochen. Bitte starte erneut und befolge die Anweisungen".bold.red)
    end
end

# erstelle URL
createURL(file_name)

# falls der Ordner noch nicht exisitiert, erstelle ihn.
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

# setze dateipfad
if folder != nil
    path = "#{folder}/#{year}-#{month}-#{day}-#{file_name}#{file_ending}"

    dirname = File.dirname(path)
    unless File.directory?(dirname)
        FileUtils.mkdir_p(dirname)
    end
else
    path = "#{year}-#{month}-#{day}-#{file_name}#{file_ending}"
end

# Untertitel
puts ""
puts "Untertitel.\n(drücke Enter, falls du keinen Untertitel einfügen willst)".bold.gray
subtitle = gets.chomp

#tags
puts ""
puts "Tags, trenne Schlagworte durch Kommas\n(drücke Enter, falls du keinen Untertitel einfügen willst)".bold.gray
tags = gets.chomp

# Beschreibung
puts ""
puts "Gib die Meta Beschreibung ein. Sie sollte nicht länger als 115 Zeichen sein".bold.gray
desc = gets.chomp

if desc.length > 115
    puts "Deine Beschreibung ist zu lang. Gib eine kürzere ein.".bold.brown
    desc = gets.chomp
    if desc == ''
        abort("Programm abgebrochen, weil keine gültige Beschreibung eingegeben wurde. Bitte starte erneut.".bold.red)
    elsif desc.length > 115
        abort('Programm abgebrochen, weil Beschreibung zu lang war. Bitte starte erneut.'.bold.red)
    end
elsif desc == ''
    puts "Bitte gib eine Beschreibung ein, die kürzer als 115 Zeichen ist".bold.gray
    desc = gets.chomp
    if desc == ''
        abort("Programm abgebrochen, weil keine gültige Beschreibung eingegeben wurde. Bitte starte erneut.".bold.red)
    elsif desc.length > 115
        abort('Programm abgebrochen, weil Beschreibung zu lang war. Bitte starte erneut.'.bold.red)
    end
end

# Erstelle neue Datei
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

# Notifikation, dass Datei erstellt wurde
puts "Datei '#{path}' erstellt".bold.green
puts ""
puts "Öffne Datei in brackets".bold.green

# füge befehl für Öffnen in Brackets ein
value = `brackets #{path}`
