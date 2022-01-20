Objects = YAML.load_file("#{Rails.root}/config/initializers/object_config.yml")
DefBookmarks = File.open("#{Rails.root}/config/initializers/bookmarks.html")
HTML = Nokogiri::HTML(DefBookmarks)

