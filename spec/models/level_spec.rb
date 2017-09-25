require 'rails_helper'

RSpec.describe Level, type: :model do
  it 'has a valid Factory' do
    build(:level).should be_valid
  end
end
