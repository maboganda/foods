class V1::OrdersController < ApplicationController
  def index
    meta, data = paginate(collection: Order.all)

    render json: OrderBlueprint.render_as_hash(data, root: :data, meta:), status: :ok
  end
end
