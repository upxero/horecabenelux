function CounterInput({
  detail,
  defaultValue,
}: {
  detail: string;
  defaultValue?: number;
}) {
  const [count, setCount] = useState(defaultValue || 0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Debug: toon count elke render
  console.log(`CounterInput '${detail}' count:`, count);

  // Helper functie om de detail string om te zetten naar een mooi label
  function prettifyLabel(text: string) {
    return text
      .replace(/_/g, ' ')                // underscores vervangen door spaties
      .replace(/\b\w/g, (char) => char.toUpperCase()); // eerste letter van elk woord hoofdletter
  }

  return (
    <Card className='mb-4'>
      {/* verborgen input voor formulierverwerking */}
      <input type='hidden' name={detail} value={count} />
      <CardHeader className='flex flex-col gap-y-5'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex flex-col'>
            <h2 className='font-medium capitalize'>{prettifyLabel(detail)}</h2>
            <p className='text-muted-foreground text-sm'>
              Geef het {prettifyLabel(detail).toLowerCase()}
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Button
              variant='outline'
              size='icon'
              type='button'
              onClick={decreaseCount}
            >
              <LuMinus className='w-5 h-5 text-primary' />
            </Button>
            <span className='text-xl font-bold w-5 text-center'>{count}</span>
            <Button
              variant='outline'
              size='icon'
              type='button'
              onClick={increaseCount}
            >
              <LuPlus className='w-5 h-5 text-primary' />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
