class BookmarkrConfigSerializer
  include JSONAPI::Serializer
  set_type :cache

  attributes :bookmarks, :settings

end
