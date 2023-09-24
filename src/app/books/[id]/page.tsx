import { IBook } from "@/app/types/global";
import { Box, Stack, Typography } from "@mui/material";

export default function Page({ params }: { params: { id: string } }) {
	const book: IBook = {
		id: 1,
		title: "Book 1",
		author: "Author 1"
	}


    return (
		<div>
			<Typography variant="h2" gutterBottom>
                Book detail
            </Typography>
			<br />
			<Stack spacing={2} direction="row">
				<Box
					component="img"
					sx={{
						height: 233,
						width: 350,
						maxHeight: { xs: 233, md: 167 },
						maxWidth: { xs: 350, md: 250 },
					}}
					alt="Book cover photo"
					src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
				/>

				<Stack spacing={2} direction="column">
					<Stack spacing={2} direction="row">
						<Typography variant="h5" gutterBottom>
							{book.title}
						</Typography>
					</Stack>
					<Stack spacing={2} direction="row">
						<Typography variant="h6" gutterBottom>
							{book.author}
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</div>
	)
}