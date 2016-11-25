module Jekyll
    class TagIndex < Page
        def initialize(site, base, dir, tag)
            @site = site
            @base = base
            @dir = dir
            @name = 'index.html'
            self.process(@name)
            self.read_yaml(File.join(base, '_layouts'), 'tag_index_en.html')
            self.data['tag'] = tag
            tag_title_prefix = 'Tagged with: '
            self.data['title'] = "#{tag_title_prefix}#{tag}"
            self.data['id'] = "#{tag}"
        end
    end
    class TagGenerator < Generator
        safe true
        def generate(site)
            if site.layouts.key? 'tag_index_en'
                dir = 'tag'
                site.tags.keys.each do |tag|
                    write_tag_index(site, File.join(dir, tag), tag)
                end
            end
        end
        def write_tag_index(site, dir, tag)
            index = TagIndex.new(site, site.source, dir, tag)
            index.render(site.layouts, site.site_payload)
            index.write(site.dest)
            site.pages << index
        end
    end
end
