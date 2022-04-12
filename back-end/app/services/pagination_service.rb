class PaginationService < ActiveService
  attr_reader :collection, :params

  def initialize(collection, params = {})
    @collection = collection
    @params = params.merge(count: collection.size)
  end

  def call
    [metadata.as_json, results]
  end

  private

  def metadata
    @metadata ||= ViewModel::Pagination.new(params)
  end

  def results
    collection.limit(metadata.per_page).offset(metadata.offset)
  end
end
