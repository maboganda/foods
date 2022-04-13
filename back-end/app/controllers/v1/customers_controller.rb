class V1::CustomersController < ApplicationController
  before_action :authenticate_request

  def index
    meta, data = paginate(collection: Customer.all, options: page_params)

    render json: CustomerBlueprint.render_as_hash(data, root: :data, meta:), status: :ok
  end

  private

  def page_params
    params.permit(:page, :per_page, :search)
  end
end
