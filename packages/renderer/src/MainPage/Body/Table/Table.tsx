type props = {
    data: {
        id: number;
        token: string;
    }[];
};

export function Table({ data }: props) {
    return (
        <div className='w-1/2 text-left overflow-auto text-white bg-primary '>
            <table className='w-full '>
                <tr className=''>
                    <th className='px-4'>Identificador</th>
                    <th className='px-4'>Token</th>
                </tr>
                {data.map(({ id, token }) => (
                    <tr>
                        <td className='px-4'>{id}</td>
                        <td className='px-4'>{token}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
