import './style.css';

const MyComponent = () => {
    const stringType = "pseudo text"
    const numberType = 123
    // const booleanType = true
    // const nullType = null
    // const undefinedType = undefined
    const objectType = {
        name: "Nguyen van A",
        age: 20
    }
    return (
        <>
            <div> {stringType} {numberType} {objectType.name} {JSON.stringify(objectType)}&Super cấp vip pro</div>
            <div className='child' style={{ fontSize: '40px' }}>Word is red</div>
        </>
    )
}

export default MyComponent;