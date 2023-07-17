import getBillboards from "@/actions/git-billboards";
import getProducts from "@/actions/git-products";
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container"

export const revalidate = 0;

const HomePage = async () => {

  const products = await getProducts({isFeatured: true});
  const billboards = await getBillboards("968ffd57-82be-4512-8db0-eb8798f0be23");
  return (
    <Container>
     <div className="space-y-10 pb-10">
    	  <Billboard data={billboards}/>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products}/>
        </div>
      </div>
    </Container>
  )
}
export default HomePage