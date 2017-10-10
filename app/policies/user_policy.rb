# Cretate user policy
class UserPolicy
  attr_reader :current_user, :model

  def initialize(current_user, model)
    @current_user = current_user
    @user = model
  end

  def index?
    Role.all[@current_user.role_id] != 'Player'
  end

  def show?
    Role.all[@current_user.role_id] != 'Player' || @current_user == @user
  end

  def destroy?
    return false if @current_user == @user
    Role.all[@current_user.role_id] != 'Player'
  end

  def update?
    show?
  end

  def add_experience?
    update?
  end

  def fight?
    Role.all[@current_user.role_id] == 'Player'
  end

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      @scope.where('role_id > ?', @user.role_id).order(:id)
    end
  end
end
