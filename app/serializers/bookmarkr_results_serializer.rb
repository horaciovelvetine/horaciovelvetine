class BookmarkrResultsSerializer < ActionController::Base
  include JSONAPI::Serializer
  set_type :results_array

  attribute :resultIds do |results|
    resultIds = results.map { |link| link.id }
  end
end