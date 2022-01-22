admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

history = { score: [0], prev: [""] }

get_nodes_from_netscape = 

digest_node = -> do |node|
  if !NODENAMES.include?(node.name) 
    log_error_node(node)
    binding.pry
  elsif node.children.length > 1
    node.children.each { |child| digest_NODE(child)}
  elsif node.children.length == 1
    node.name == "a" ? digest_link_info(node) : digest_tag_info(node)
  elsif node.children
    binding.pry
  end
end

log_error_node = -> do |node|
  puts "<-- Note: -->"
  puts "Node Import not supported for: #{node.name}"
  puts "Text: #{node.text}"
  puts "<----------->"
  puts "#{node}"
  puts "<----------->"
end


links = FormattedLinks.map { |l| Link.create!(l.info)}## info should [appropriately]  be => ( name: l.name, href: l.href, tags: l.tags, content: l.content)}