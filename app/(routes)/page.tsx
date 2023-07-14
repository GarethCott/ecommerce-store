import getBillboards from "@/actions/git-billboards";
import Billboard from "@/components/Billboard"
import Container from "@/components/ui/Container"

export const revalidate = 0;

const HomePage = async () => {

  const billboards = await getBillboards("bfc6670d-a5f5-4a31-b501-6ab5e3688551");
  return (
    <Container>
      <div className="space-y-10 pb-10">
    	  <Billboard data={billboards}/>
      </div>
    </Container>
  )
}
export default HomePage