import { useEffect, useState } from "react"

export const FeedFilter = ({ onFilter }) => {
  const [filterBy, setFilterBy] = useState({ txt: "" })

  useEffect(() => {
    onFilter(filterBy)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy])

  const onSetFilter = ({ target }) => {
    setFilterBy({ ...filterBy, [target.name]: target.value })
  }

  return (
    <section className="feed-filter-container">
      <input
        type="text"
        value={filterBy.txt}
        name="txt"
        onChange={onSetFilter}
      />
    </section>
  )
}
