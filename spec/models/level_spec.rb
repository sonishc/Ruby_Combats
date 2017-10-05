require 'rails_helper'

RSpec.describe Level, type: :model do
  it 'has a valid Factory' do
    level = FactoryGirl.build :level
    level.should be_valid
  end
end
