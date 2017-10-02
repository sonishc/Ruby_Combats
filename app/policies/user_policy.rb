# Cretate user policy
class UserPolicy
  attr_reader :current_user, :model

  def initialize(current_user, model)
    @current_user = current_user
    @user = model
  end

  def index?
    @current_user.role_id < 4
  end

  def show?
    @current_user.role_id < 4 || @current_user == @user
  end

  def destroy?
    return false if @current_user == @user
    @current_user.role_id < 4
  end

  def update?
    @current_user.role_id < 4
  end
end
