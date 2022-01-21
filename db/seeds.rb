admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

HTML.search("//dl").first.children.each do |node|
  binding.pry
#   node.children.length > 1 ? digestsubnodes(node) : digestnode(node)
end
