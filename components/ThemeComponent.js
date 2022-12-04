import dynamic from "next/dynamic";

const ThemeComponent =  ({ path, ...props}) =>  {
  const DynamicComponent =  dynamic(async () =>
    await import(`/components/${path}`), {
      ssr: false,
    }
  )
  return <DynamicComponent {...props} />
}
export default ThemeComponent;