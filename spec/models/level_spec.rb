require 'rails_helper'

RSpec.describe Level, type: :model do
  it 'has a valid Factory' do
    build(:level).should be_valid
  end
  it { is_expected.to validate_presence_of(:experience_level) }
  it { is_expected.to validate_presence_of(:health_point_level) }
end
