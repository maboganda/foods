class V1::AdminsController < ApplicationController
  def create
    admin = Admin.create!(admin_params)

    created(AdminBlueprint.render_as_hash(admin, root: :data))
  end

  private

  def admin_params
    params
      .require(:admin)
      .permit(:first_name, :last_name, :mobile_number, :birthdate, :email, authentication_attributes: %i[email password])
  end
end
