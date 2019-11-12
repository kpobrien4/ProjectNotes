class Track < ApplicationRecord
    validates :title, presence: true
    validates :notes, presence: true
end
