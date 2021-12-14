class ApplicationController < ActionController::Base

  def home
    @data = [{name: "test", age: 11, attribute: "good at testing"}, {name: "test2", age: 12, attribute: "better at testing, because of an extra year of experience"}]
  end


end
