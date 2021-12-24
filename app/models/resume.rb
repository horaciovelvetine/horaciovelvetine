class Resume < ApplicationRecord
    belongs_to :content, polymorphic: true
end
