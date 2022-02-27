import { Table } from '../atoms/table'
import { Button } from '../atoms/button'

export const UserTable = () => {
  return (
    <>
      <Table className="rounded-md">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>city</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jhon Smith</td>
            <td>jhonsmith</td>
            <td>jhon@smith.com</td>
            <td>NYC</td>
            <td>
              <Button variant="secondary">Edit</Button>
              <Button variant="error">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jhon Smith</td>
            <td>jhonsmith</td>
            <td>jhon@smith.com</td>
            <td>NYC</td>
            <td>
              <Button variant="secondary">Edit</Button>
              <Button variant="error">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="flex flex-col items-center">
        {/* <!-- Help text --> */}
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to{' '}
          <span className="font-semibold text-gray-900 dark:text-white">10</span> of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          {/* <!-- Buttons --> */}
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Prev
          </button>
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
