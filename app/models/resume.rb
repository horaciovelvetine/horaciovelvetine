class Resume < ApplicationRecord
    belongs_to :content, polymorphic: true, optional: true
end
