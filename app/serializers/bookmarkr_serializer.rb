class BookmarkrSerializer
  include JSONAPI::Serializer
  set_type :all_bookmarks
  attribute :bookmarks do |context|
    bookmarks = context.links.map { |link| link }
  end
end
