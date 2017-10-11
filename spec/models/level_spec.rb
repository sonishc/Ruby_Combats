require 'rails_helper'

RSpec.describe Level, type: :model do
  let(:level) { FactoryGirl.create(:level) }

  it 'has a valid Factory' do
    expect(level.valid?).to be(true)
  end

  it 'valid if level value is integer' do
    level.level = 12
    expect(level.valid?).to be(true)
  end

  it 'invalid if level value is string' do
    level.level = 'some string'
    expect(level.valid?).to be(false)
    expect(level.errors[:level]).to include('is not a number')
  end

  it 'valid if level experience_level is integer' do
    level.experience_level = 50
    expect(level.valid?).to be(true)
  end

  it 'invalid if level experience_level is integer' do
    level.experience_level = 'Test'
    expect(level.valid?).to be(false)
    expect(level.errors[:experience_level]).to include('is not a number')
  end

  it 'valid if health_point_level value is integer' do
    level.health_point_level = 100
    expect(level.valid?).to be(true)
  end

  it 'invalid if health_point_level is integer' do
    level.health_point_level = 'Test'
    expect(level.valid?).to be(false)
    expect(level.errors[:health_point_level]).to include('is not a number')
  end
end
