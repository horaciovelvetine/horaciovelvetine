class BookmarkrCacheSerializer < ActionController::Base
  include JSONAPI::Serializer
  set_type :cache
  set_id :id
  # attributes :tags, :links
  attribute :tags do |obj|
    tags = obj.tags.map { |tag| {id: tag.id, name: tag.name, links: only_ids(tag, "links")}}
  end

  attribute :links do |obj|
    links = obj.links.map{ |link| {id: link.id, name: link.name, href: link.href, tags: only_ids(link, "tags"), isPinned: link.pinned }
  end

  ## takes in object, and using a string value calls method on that obj to return an array of associated
  def self.only_ids(obj, str)
    ids = obj.send(:"#{str}").map { |o| o.id }
    ids.empty? ? ["empty"] : ids
  end

end
