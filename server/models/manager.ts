import { User, createUsers, userFactory } from './user.js'

type OrgChart = {
  subject: User,
  supervisor: User,
  peers?: Array<User>,
  direct_reports: Array<User>
}

type Manager = {
  org_chart: OrgChart
}

const managerFactory = (directReportAmount: number = 11, peerAmount?: number) => {
  const peers = Boolean(peerAmount) ? createUsers(peerAmount) : undefined
  if (!Boolean(directReportAmount)) throw new Error("directReport has to be a number larger than zero (0)")

  const manager: Manager = {
    org_chart: {
      subject: userFactory(),
      supervisor: userFactory(true),
      peers: peers,
      direct_reports: createUsers(directReportAmount)
    }
  }

  return manager
}

export { managerFactory }