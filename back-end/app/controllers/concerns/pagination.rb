module Pagination
  def paginate(collection:, options: {})
    meta, data = PaginationService.call(collection, options)

    [meta, data]
  end
end
