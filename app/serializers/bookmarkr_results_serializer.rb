class BookmarkrResultsSerializer < ActionController::Base
  include JSONAPI::Serializer
  set_type :results_array

  attribute :resultIds do |results|
    if results.id
      resultsIds = {resultId: "#{results.id}"}
    elsif results.length > 1
      ids = results.map{ |link| "#{link.id}" }
      resultsIds = { resultsIds: ids }
    else
      ##catch error
      binding.pry
    end
    resultsIds
  end
end