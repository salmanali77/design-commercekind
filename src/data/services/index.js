import { ppcService } from './ppcService'
import { accountService } from './accountService'
import { seoService } from './seoService'
import { listingService } from './listingService'
import { ebcService } from './ebcService'
import { brandProtectionService } from './brandProtectionService'
import { storeSetupService } from './storeSetupService'
import { reimbursementService } from './reimbursementService'
import { influencerService } from './influencerService'
import { fbaConsultingService } from './fbaConsultingService'
import { launchService } from './launchService'
import { photoEditingService } from './photoEditingService'
import { vendorCentralService } from './vendorCentralService'
import { tiktokShopService } from './tiktokShopService'
import { automationService } from './automationService'
import { copywritingService } from './copywritingService'
import { ungatingService } from './ungatingService'
import { marketingService } from './marketingService'

export const servicesList = [
  ppcService,
  accountService,
  seoService,
  listingService,
  ebcService,
  brandProtectionService,
  storeSetupService,
  reimbursementService,
  influencerService,
  fbaConsultingService,
  launchService,
  photoEditingService,
  vendorCentralService,
  tiktokShopService,
  automationService,
  copywritingService,
  ungatingService,
  marketingService,
]

export const getServiceById = (id) => {
  return servicesList.find((s) => s.id === id) || ppcService
}

export {
  ppcService,
  accountService,
  seoService,
  listingService,
  ebcService,
  brandProtectionService,
  storeSetupService,
  reimbursementService,
  influencerService,
  fbaConsultingService,
  launchService,
  photoEditingService,
  vendorCentralService,
  tiktokShopService,
  automationService,
  copywritingService,
  ungatingService,
  marketingService,
}
