import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
	@Query(() => String) // the uppercase String is a type-graphql thing
	hello() {
		return "hello";
	}
}
