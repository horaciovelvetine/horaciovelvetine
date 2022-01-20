links = HTML.search("//dl").first.children.map do |node|
  
  if node.name == "p" && node.children.length < 2
    return
  end

  if node.children.length > 1 
    binding.pry
  end


end
