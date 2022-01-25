admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

AcceptedTags = ["dl", "dt", "meta", "html", "p"]
Exceptions = ["bookmarks bar", "h1", "meta"]


      ## child.parent (returns a nodes parent)

  
get_bookmarks_from_doc = lambda do |admin, contexts, tags|
  doc = BookmarksDoc.search("//dl") ## Grabs Body of Doc
  track = {score: [0], prev: [] } ##=> track[:score] => [0]
  formatted_links = []
  
  

  doc.children.each do |child|
    if !AcceptedTags.include?(child.name)
      binding.pry
      log_error_node.call(child)
    elsif Exceptions.include?(child.name)
      binding.pry
      puts "Exception Skipped!"
      next
    elsif child.name == "dl" ##? INCREASE CUR_SCORE +1
      track[:score] += 1
      binding.pry
    elsif child.name == "p" ##? DECREASE CUR_SCORE -1 for ea consecutive repeating "P" element
      track[:prev].last.name == "a" ? track[:score][track[:score].length-1] -= 1 : false
      
      binding.pry
    elsif child.name == "dt" ##? PUSH A NEW COLUMN TO SCORE IF PREV "P", THEN DIGEST CHILD.
      track[:prev].last.name == "p" ? track[:score] << 0
      binding.pry
      # child.children.first.name == "a" ? digest_link.call(child) : digest_tag.call(child)
    else
      binding.pry
    end

    binding.pry
    push_element_to_history.call(child)

  end
    

  binding.pry
  ## returns an array of freshly created links
  # return links = formatted_links.map { |link| Link.create!(link.info)}
end

  digest_node = lambda do |node|
    if node.children == 1
      node.name == "a" ? digest_link(node) : digest_link(node)
    end
    binding.pry
  end

  digest_link = lambda do |ele|
    binding.pry
  end

  digest_tag = lambda do |ele|
    binding.pry
    
    digest = Tag.find_or_create_by(name: ele.children.last.text)
  end

log_error_node = lambda do |node|
  puts "<-- Note: -->"
  puts "Node Import not supported for: #{node.name}"
  puts "Text: #{node.text}"
  puts "<----------->"
  puts "#{node}"
  puts "<----------->"
end

push_element_to_history = lambda do |ele|
  track[:prev] << ele 
  binding.pry
end






get_bookmarks_from_doc.call(admin, contexts, tags)

binding.pry