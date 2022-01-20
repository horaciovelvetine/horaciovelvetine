HTML.search("//dl").first.children.each do |node|
  formatted_links = []
  tags_to_add_by_name = [] ## Should be an array of tag_names to find/create + add to
  context = contexts##.find_by_name("bookmarked")



  if (node.name == "p" || node.name =="dt" || node.name == "dl" ) && node.children.length < 2
    puts "Skip #1"
    puts "name:#{node.name}, said: #{node.text}"
    next
  end

  if node.children.length > 1
    
    node.children.each do |child|

      ## Handles all tag elements
      if child.name == "h3"
        binding.pry
      ## Handles all link elements
      elsif child.name == "a"
        binding.pry
      ## Handles all exceptions
      else
        binding.pry
      end

      binding.pry

    end

  end

  ## Here the node.children length == 0 or ?? 
  binding.pry

end

## This is the last call which needs to be made at end of loop
links = formatted_links.map { |new_link_info| Link.create!(new_link_info)} 

  ## Psuedo Code it Out
  
  ## Example object needed to seed DB with links 
  # links = [{name: "Rails Docs", href: "https://guides.rubyonrails.org/", tags: ["ruby", "rails", "docs", "documentation", "resource", "reference", etc..], contexts: ["bookmarked"], admin_id: admin}]
  