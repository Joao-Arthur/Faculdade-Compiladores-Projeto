type props = {
    data: {
        id: number;
        word: string;
    }[];
};

export function Table({ data }: props) {
    return (
        <div className='h-full w-[528px] text-left text-white bg-primary flex overflow-hidden'>
            <table className='w-full overflow-x-auto h-full flex flex-col'>
                <thead>
                    <tr className='bg-black/20'>
                        <th className='px-4 w-36'>Código</th>
                        <th className='px-4 w-96'>Palavra</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-auto h-full'>
                    {data.map(({ id, word }, index) => (
                        <tr className='border-b border-white/10' key={index}>
                            <td className='px-4 py-2 w-36'>{id}</td>
                            <td className='px-4 py-2 w-96'>{word}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
