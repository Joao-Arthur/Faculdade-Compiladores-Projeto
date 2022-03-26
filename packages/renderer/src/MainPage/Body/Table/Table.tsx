type props = {
    data: {
        id: number;
        word: string;
    }[];
};

export function Table({ data }: props) {
    return (
        <div className='w-1/2 text-left overflow-auto text-white bg-primary '>
            <table className='w-full '>
                <thead>
                <tr className='bg-black/20'>
                    <th className='px-4'>Identificador</th>
                    <th className='px-4'>Token</th>
                </tr>
                </thead>
                <tbody>
                    {data.map(({ id, word }, index) => (
                        <tr className='border-b border-white/10' key={index}>
                            <td className='px-4 py-2'>{id}</td>
                            <td className='px-4 py-2'>{word}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
