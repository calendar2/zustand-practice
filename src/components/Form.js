import useMemoStore from "../stores/memos"

const Form = () => {
  const { memo, setMemo, setMemos } = useMemoStore()

  const handleWriteMemo = (e) => {
    setMemo(e.target.value)
  }

  const handleAddMemo = (e) => {
    e.preventDefault()
    setMemos(memo)
    setMemo('')
  }

  return (
    <div>
      <form onSubmit={handleAddMemo}>
        <input type="text" onChange={handleWriteMemo} value={memo} />
        <button type="submit">작성완료</button>
      </form>
    </div>
  )
}

export default Form