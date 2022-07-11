const main = (props) => {
  const {
    title,
    headers,
    columns,
    data
  } = props

  return (
    <div class="relative overflow-x-auto sm:rounded-md">
      <h5 class="text-2xl p-6 font-bold tracking-tight bg-gray-50 dark:bg-gray-800 dark:text-white">
        {props.title}
      </h5>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
          <tr>
            {headers.map(header => (<th scope="col" class="px-6 py-3">{header}</th>)) ?? null}
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {columns.map((column, x) => {
                const row_item = data[column]
                return <td key={x} class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{row_item}</td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default {
  main
}