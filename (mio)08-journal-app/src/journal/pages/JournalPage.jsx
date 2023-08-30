import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
         {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas qui nobis asperiores deleniti earum. Temporibus reiciendis distinctio odit blanditiis deleniti placeat fugiat, suscipit numquam natus minima architecto, rem at odio.</Typography> */}
         {/* <NothingSelectedView /> */}
         <NoteView />
      </JournalLayout>
    </>
  )
}
