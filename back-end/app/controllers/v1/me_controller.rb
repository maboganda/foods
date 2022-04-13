class V1::MeController < ApplicationController
  before_action :authenticate_request

  def index
    render json: AdminBlueprint.render_as_hash(current_admin, root: :data), status: :ok
  end
end
