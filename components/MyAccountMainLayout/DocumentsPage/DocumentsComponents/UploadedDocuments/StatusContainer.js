import { Badge, HStack } from "@chakra-ui/react"

export const StatusContainer = ({t, status}) => {
  let statusStr = statusValue(`${status}`);

  const styles = {
    1: { color: "#845c24", bg: "#f2bd59", border: "1px solid #cc9342"},
    2: { color: "white", bg: "#2e7907", border: "1px solid #184905"},
  }
  return (
    <HStack justifyContent={{base: 'flex-start', lg: 'flex-end'}} alignItems="flex-start" my={{base: 4, lg: 0}}
      order={{base: 2, lg: 3}}>
      <Badge fontWeight={400} textTransform="none" borderRadius="5px" sx={styles[status] || {}}>
        {t(statusStr)}
      </Badge>
    </HStack>
  )
}

function statusValue(status) {
  switch (status) {
    case "1":
      return "myAccount.documentsPage.uploadedDocumentsBlock.status.pending"
    case "2":
      return "myAccount.documentsPage.uploadedDocumentsBlock.status.checked"
    case "3":
      return "myAccount.documentsPage.uploadedDocumentsBlock.status.error"
    default:
      return "-"
  }
}
