class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  FORMATTED = []
  HISTORY = { score: [0], prev: [""] }
  NODENAMES = ["dl", "p", "dt", "h3", "a"]

  def digest_netscape_bookmarks(doc, admin, tags, contexts)
    binding.pry
  end
  
  
  def digestsubnodes(parent_node)
    parent_node.children.each do |child|
      child.children.length > 1 ? digestsubnodes(child) : digestnode(child)
    end  
    binding.pry
  end

  
  def digestnode(node)
    if !NODENAMES.include?(node)
      puts "<-- Note: -->"
      puts "Node Import not supported for: #{node.name}"
      puts "Text: #{node.text}"
      puts "<----------->"
      puts "#{node}"
      puts "<----------->"
      binding.pry
    end

    binding.pry
    node.name == "a" ? link_digest(node) : tag_digest(node)
  end

  def link_digest(link)
    binding.pry
  end

  def tag_digest(tag)
    binding.pry
  end


  
end
