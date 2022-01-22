
  # nodenames = ["dl", "p", "dt", "h3", "a"]
  # @history = { score: [0], prev: [""] }
  
  ## Build out some skip dictionaries? 
  # skip_p_element = (node.name == "p"||child.name == "p")
  # skip_text_element = (node.name =="text" || child.name == "text")
  # skip_nscape_element = (node.name == "dt" || node.name == "dl")

  ##RULES:
  ## --> dl: "increase current value of x by 1",
  ## --> p: "if prev == 'a' then decrease current value of x by 1"
  ## --> p: "if prev == 'p' then check next value of prev"
  ## --> dt: "if prev == 'p' then push new 0 to array" (signifies a "max" for that axis of x values) then should check for tag or link digest

# HTML.search("//dl").first.children.each do |node|
#   node.children.length > 1 ? iterate_over_subnodes(node) : import_node(node)
#   binding.pry
# end



