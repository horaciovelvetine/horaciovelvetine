Objects = YAML.load_file("#{Rails.root}/config/initializers/object_config.yml")
DefBookmarks = File.open("#{Rails.root}/config/initializers/bookmarks.html")
DefBookmarksNokoDoc = Nokogiri::HTML(DefBookmarks)
NodeNames = ["dl", "p", "dt", "h3", "a"]
FormattedLinks = []