admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}


formatted_links = []

HTML.search("//dl").first.children.each do |node|
  tags_to_add = [] ## Should be an array of tag_names to find/create + add to

  if ( node.name == "p" || node.name == "dl" ||node.name == "dt" ) && node.children.length < 2
    puts "----------------------------------------------------------------"
    puts " NODE EXCLUDED name:#{node.name}, said:(#{node.text}) step: 1"
    puts "----------------------------------------------------------------"
    next
  end
  
  node.children.each do |child|
    if child.text == "Bookmarks Bar" || child.name == "text" || child.name == "p" 
      puts "----------------------------------------------------------------"
      puts " NODE EXCLUDED name:#{child.name}, said:(#{child.text}) step: 2"
      puts "----------------------------------------------------------------"
      next
    end
    
    if child.name == "a"
      binding.pry
    elsif child.name == "h3"
      binding.pry
    end
    

    ##[CONTINUES RECURSIVELY]
  end
end

## This is the last call which needs to be made at end of loop
links = formatted_links.map { |new_link_info| Link.create!(new_link_info)} 


  
  ## Example object needed to seed DB with links 
  # links = [{name: "Rails Docs", href: "https://guides.rubyonrails.org/", tags: ["ruby", "rails", "docs", "documentation", "resource", "reference", etc..], contexts: ["bookmarked"], admin_id: admin}]
  
  ## Build out some skip dictionaries? 
  # skip_p_element = (node.name == "p"||child.name == "p")
  # skip_text_element = (node.name =="text" || child.name == "text")
  # skip_nscape_element = (node.name == "dt" || node.name == "dl")

admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

  # @nodenames = ["dl", "p", "dt", "h3", "a"]
  ##RULES:
  ## --> dl: "increase current value of x by 1",
  ## --> p: "if prev == 'a' then decrease current value of x by 1"
  ## --> p: "if prev == 'p' then check next value of prev"
  ## --> dt: "if prev == 'p' then push new 0 to array" (signifies a "max" for that axis of x values) then should check for tag or link digest

  # @formatted = []
  # @history = { score: [0], prev: [""] }

HTML.search("//dl").first.children.each do |node|
  node.children.length > 1 ? iterate_over_subnodes(node) : import_node(node)
  binding.pry
end

# def iterate_over_subnodes(parent_node)
#   parent_node.children.each do |child|
#     if child.children.length > 1 ? iterate_over_subnodes(child) : import_node(child)
#   end  
#   binding.pry
# end

# def import_node(node)

#   if !@nodenames.include?(node)
#     puts "<-- Note: -->"
#     puts "Node Import not supported for: #{node.name}"
#     puts "Text: #{node.text}"
#     puts "<----------->"
#     puts "#{node}"
#     puts "<----------->"

#     binding.pry
#   end

#   binding.pry

#   if node.name == "a" ? link_digest(node) : tag_digest(node)
# end

# def link_digest(link)
#   binding.pry
# end

# def tag_digest(tag)
#   binding.pry
# end