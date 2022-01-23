admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

AcceptedTags = ["dl", "dt", "meta", "html"]
Exceptions = ["bookmarks bar", "h1", "meta"]



get_bookmarks_from_doc = lambda do |admin, contexts, tags|
  doc = BookmarksDoc.search("//dl")
  track = {score: [0], prev: [""] }
  formatted_links = []
  binding.pry

  doc.children.each do |child|
    if !AcceptedTags.include?(child.name)
      log_error_node(node)
      binding.pry
    elsif Exceptions.include?(child.name)
      puts "Exception Skipped!"
      next
    elsif child.name == "dl"
      # Should increase score by 1
    elsif child.name == "p"
      # track.prev.last.name == "a" ? decrease score by 1 : checks number of p's in history since last a, and subtracts the total number from the score @ index of self[n-1] where n is length of the array
    elsif child.name == "dt"
      # track.score << 0 (Add a new column) if prev "p" if not do nothing, and check child for type (shoudl be either a tag or a link)
    else
      #I cant be sure whats going on here
    end
    
  ##Grabs HTML From Netscape Formatted BookMark HTML Doc

  binding.pry
  ## returns an array of freshly created links
  return links = formatted_links.map { |link| Link.create!(link.info)}
end


  digest_node = lambda do |node|
    if node.children == 1
      node.name == "a" ? digest_link(node) : digest_link(node)
    end
    binding.pry
  end

  

  digest_link = lambda do |ln|
    binding.pry
  end

  digest_tag = lambda do |ln|
    binding.pry
  end

log_error_node = lambda do |node|
  puts "<-- Note: -->"
  puts "Node Import not supported for: #{node.name}"
  puts "Text: #{node.text}"
  puts "<----------->"
  puts "#{node}"
  puts "<----------->"
end

get_bookmarks_from_doc.call(admin, contexts, tags)

binding.pry